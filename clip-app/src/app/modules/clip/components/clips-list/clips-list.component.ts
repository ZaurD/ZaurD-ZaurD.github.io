import { Component, OnInit, Output } from '@angular/core';
import { Clip } from '../../models/clip';
import { ClipsDbjsonService } from '../../services/clips-dbjson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.scss'],
})
export class ClipsListComponent implements OnInit {
  public clips: Clip[] = [];

  public selectedClip: Clip | undefined;

  public urlSafe: SafeResourceUrl | undefined;

  public videoUrl: string | undefined;

  constructor(
    private _clipsDbjsonService: ClipsDbjsonService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this._clipsDbjsonService
      .getPlaylist()
      .subscribe((clips) => (this.clips = clips));

    this.selectClip(0);
  }

  public removeClip(clipId: number): void {
    const result: boolean = confirm('Want to delete?');
    if (result) {
      this._clipsDbjsonService.removeClip(clipId).subscribe((_) => {
        this.clips = this.clips.filter((eachClip) => eachClip.id !== clipId);
      });
    }
  }

  public selectClip(clipId: number): void {
    this._router.navigate(['/', 'personalcabinet', 'myplaylist', clipId]);
    this._activatedRoute.params.subscribe((params) => {
      const selectedId: number = parseInt(params['id']);
      this.selectedClip = this.clips.find((clip) => clip.id === selectedId);
      this.videoUrl = this.selectedClip?.video;
      if (this.videoUrl) {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.videoUrl
        );
      }
    });
  }
}
