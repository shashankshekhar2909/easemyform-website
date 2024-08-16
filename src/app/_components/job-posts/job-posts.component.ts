import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.css']
})
export class JobPostsComponent {
  jobId: string = '';
  jobPostList:[] = [];
  jobDetail:any = null;
  jobChips:any = [];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      console.log(params);
      if(params){
        this.jobId = params._id;
        this.loadJobDetails(this.jobId);
        }
    });
  }

  loadJobDetails(id: string): void {
    console.log(id);
    // Fetch job details using the id
    const jobId = {
      _id:id
    }
    this.authService.getJobDetails(jobId).subscribe({
      next: (resp:any) => {
        console.log(resp);
        this.jobPostList = resp.results;
        this.jobDetail = this.jobPostList.find((job:any) => job._id === id);
        this.jobChips = this.jobDetail.keywords[0].split(',').map((chip:any) => chip.trim());
        console.log(this.jobDetail);
        console.log(resp);
      },
      error: (HttpResponse: HttpErrorResponse) => {
        console.log(HttpResponse);

      }
    });
  }

}
