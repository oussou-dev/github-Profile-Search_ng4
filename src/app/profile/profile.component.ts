import { GithubService } from './../services/github.service';
import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  repos= [];
  username: string;


  constructor(private _githubService: GithubService) {
   
    // this._githubService.getUser().subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    // });
   
    // this._githubService.getRepos().subscribe(repos => {
    //   this.repos = repos
    // })

    this.user = false;

   }

   searchUser() {
      this._githubService.updateUser(this.username);

      this._githubService.getUser().subscribe(user => {
        console.log(user);
        this.user = user;
      });
   
      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos
      })




    }




  ngOnInit() {
  }



}
