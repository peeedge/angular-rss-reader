import { Component, OnInit, Input } from '@angular/core';

import { RSSParserService } from './rss-parser.service';

import { RSSParsed } from 'rss-parser';

@Component({
  selector: 'rss-feed',
  template: `
    <p> <b>Feed URL:</b> {{rssParsed.feed.feedUrl}} </p>
    <p> <b>Title:</b> {{rssParsed.feed.title}} </p>
    <p> <b>Description:</b> {{rssParsed.feed.description}} </p>
    <p> <b>{{rssParsed.feed.link}}</b> </p>
    <strong> Entries: </strong>
    <ul>
      <li *ngFor="let entry of rssParsed.feed.entries">
        <p> <a href="{{entry.link}}">{{entry.title}}</a>
      </li>
    </ul>
  `
})
export class RSSFeedComponent implements OnInit {

  @Input() url: string;
  rssParsed: RSSParsed;

  constructor(private rssParser: RSSParserService) { }

  ngOnInit() {
    debugger;
    this.rssParser.parseURL(this.url).subscribe(rssParsed => {
    debugger;
      this.rssParsed = rssParsed;
    });

  }

}
