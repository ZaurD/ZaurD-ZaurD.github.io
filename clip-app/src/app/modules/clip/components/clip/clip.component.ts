import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss'],
})
export class ClipComponent implements OnInit {
  @Input() public imageUrl: string = '';
  @Input() public videoUrl: string = '';
  @Input() public id: number = 0;
  @Input() public singer: string = '';
  @Input() public song: string = '';

  public urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  public videoIcon: string = 'assets/img/play.png';
  public play: string = 'Play';
  public videodisabled: boolean = true;

  public changeImg() {
    if (this.play == 'Play') {
      (this.play = 'Pause'),
        (this.videoIcon = 'assets/img/pause.png'),
        (this.videodisabled = false);
    } else {
      (this.videoIcon = 'assets/img/play.png'),
        (this.play = 'Play'),
        (this.videodisabled = true);
    }
  }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
