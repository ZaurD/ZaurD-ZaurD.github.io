import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-clip',
  templateUrl: './favorite-clip.component.html',
  styleUrls: ['./favorite-clip.component.scss'],
})
export class FavoriteClipComponent implements OnInit {
  @Input() public imageUrl: string = '';
  @Input() public videoUrl: string = '';
  @Input() public id: number = 0;
  @Input() public singer: string = '';
  @Input() public song: string = '';

  @Output() public remove = new EventEmitter();
  @Output() public select = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onRemove(): void {
    this.remove.emit();
  }

  public onSelect(): void {
    this.select.emit();
  }
}
