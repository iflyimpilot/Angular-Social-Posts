import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post"; //Import Post interface to social-posts component.

@Component({
  selector: "social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;

  posts: Post[] = [
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool."
    },
    {
      title: "thought1",
      thought: "Grand Circus is cool."
    },
    {
      title: "thought2",
      thought: "Grand Circus is cool."
    },
    {
      title: "thought3",
      thought: "Grand Circus is cool."
    }
  ];

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}

