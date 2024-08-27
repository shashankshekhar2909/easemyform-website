import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{

  page:number=1;
  limit:number=10;
  jobPostList:any = [];
  totalPages:number=1;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadJobList(this.page,this.limit);
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

  loadJobList(page:number,limit:number): void {
    this.authService.getJobList(page,limit).subscribe({
      next: (resp:any) => {
        console.log(resp);
        this.jobPostList = resp.results;
        console.log(resp);
      },
      error: (HttpResponse: HttpErrorResponse) => {
        console.log(HttpResponse);
        alert('No Job Found;')
      }
    });
  }

  changePage(page:number){
    this.page = page;
    this.loadJobList(this.page,this.limit);
  }

  viewJob(job:any){
    console.log(job);
    this.router.navigate(['/job'], { queryParams: { _id: job._id } });

  }
}
