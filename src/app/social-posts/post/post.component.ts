import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/interfaces/post";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() individualPost: Post;
  @Input() index: number;
  @Output() delete = new EventEmitter<any>();

  //This triggers parent to splice(delete items)
  deletePost(index: number): void {
    this.delete.emit(index);
  }

  constructor() {}

  ngOnInit() {}
}

//ln 1 import Input so we can use the Input decorator (ln 10)
//ln 1 add Output, EventEmitter

//Input vs Output.. Input is data, Output is event
