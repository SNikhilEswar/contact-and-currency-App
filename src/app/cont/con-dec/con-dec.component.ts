import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-con-dec',
  templateUrl: './con-dec.component.html',
  styleUrls: ['./con-dec.component.css']
})
export class ConDecComponent implements OnInit {

  contacts;

  constructor(private server:ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parms => {
      console.log(parms.get('id'));
      let pid = parms.get('id')
      this.server.singledata(pid).subscribe(res => {
        console.log(res);
        this.contacts = res;
      })
    })
  }

}
