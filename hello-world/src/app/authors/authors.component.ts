import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  // title = 'Authors'
  // authors;
  // isActive = true;
  // isInActive = false;
  // constructor(authorsService: AuthorsService) {
  //   this.authors = authorsService.getAuthors()
  // }
  // onDivClick() {
  //   console.log("Div Clicked")
  // }
  // onClick($event) {
  //   // Stop event bubbling
  //   $event.stopPropagation();
  //   console.log("Button Clicked", $event)
  // }
  // onKeyUp($event) {
  //   console.log($event.target.value);
  //   if ($event.keyCode === 13) console.log("Enter was pressed")
  // }
  // onKeyUp() {
  //   console.log("Enter was pressed")
  // }
  // onKeyUp(email) {
  //   console.log(email)
  // }
  // email="janani@gmail.com";
  // onKeyUp($event) {
  //   console.log(this.email);
  // }
  // course={
  //   title: "The Complete Angular Course",
  //   rating:4.9745,
  //   students:30123,
  //   price:190.95,
  //   releaseDate:new Date(2018,1,1)
  // }
  // text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  isFavorite: boolean;
  onClick() {
    this.isFavorite = !this.isFavorite;
  }


  ngOnInit() {
  }

}
