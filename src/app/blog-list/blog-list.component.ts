import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

   blogposts : Blogpost[][];
   currentpage:number;
  constructor() { }

  ngOnInit() {
    this.currentpage=0;
    this.blogposts =
                  [
                   
                    [
                      { 
                          title:'post1',
                          summary:' kbckjs'},
                          {
                            title:'post2',
                          summary:' kbckjs'
                          },
                          {
                            title:'post3',
                          summary:' kbckjs'
                          },
                          {
                            title:'post4',
                          summary:' kbckjs'
                          }
                        ],
                        [
                          { 
                              title:'post5',
                              summary:' kbckjs'},
                              {
                                title:'post6',
                              summary:' kbckjs'
                              },
                              {
                                title:'post7',
                              summary:' kbckjs'
                              },
                              {
                                title:'post8',
                              summary:' kbckjs'
                              }
                            ],
                            [
                              { 
                                  title:'post9',
                                  summary:' kbckjs'},
                                  {
                                    title:'post10',
                                  summary:' kbckjs'
                                  },
                                  {
                                    title:'post11',
                                  summary:' kbckjs'
                                  },
                                  {
                                    title:'post12',
                                  summary:' kbckjs'
                                  }
                                ]
                  ]
    
  }

   update(newpage){
     console.log("event emitted");
     this.currentpage=newpage;
   }
}
