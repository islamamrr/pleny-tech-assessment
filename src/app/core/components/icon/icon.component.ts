import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styles: []
})
export class IconComponent implements OnInit {
  @Input() iconName: string = '';
  @Input() size: string = '24';
  @Input() color: string = '';

  svgContent: SafeHtml = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadIcon(this.iconName);
  }

  loadIcon(iconName: string) {
    const path = `assets/icons/${iconName}.svg`;
    this.http.get(path, { responseType: 'text' }).subscribe(svg => {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
    });
  }
}
