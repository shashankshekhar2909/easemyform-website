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
  roles:any = [];
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
      } else {
        alert('No Job Found;')
      }
    });
    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    // Disable text copying using keyboard shortcuts
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'u' || e.key === 's')) {
        e.preventDefault();
      }
    });

  }

  loadJobDetails(id: string): void {
    console.log(id);
    // Fetch job details using the id
    const jobId = {
      _id:id,
      type:'filter'
    }
    this.authService.getJobDetails(jobId).subscribe({
      next: (resp:any) => {
        console.log(resp);
        this.jobPostList = resp.results;
        this.jobDetail = this.jobPostList.find((job:any) => job._id === id);
        if(this.jobDetail.keywords[0]){
          this.jobChips = this.jobDetail.keywords[0].split(',').map((chip:any) => chip.trim());
        }
        console.log(this.jobDetail);
        console.log(resp);
      },
      error: (HttpResponse: HttpErrorResponse) => {
        console.log(HttpResponse);
        alert('No Job Found;')
      }
    });
  }

}
