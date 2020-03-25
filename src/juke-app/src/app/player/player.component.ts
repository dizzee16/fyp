import { Component, OnInit, OnDestroy } from '@angular/core';
import { StreamState } from '../_interfaces/stream-state';
import { AudioService } from '../_services/audio.service';
import { CloudService } from '../_services/cloud.service';
import { Song } from '../_interfaces/song';
import { Subject, PartialObserver, Observer } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  files: any[] = [];
  state: StreamState;
  currentFile: any = {};
  constructor(
    public audioService: AudioService,
    public cloudService: CloudService
  ) {
    cloudService.getFiles().subscribe(files => {
      this.files.push(files);
    });

    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
   }

  ngOnInit() {
    console.log(this.cloudService.queue.next());
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {

    });
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1 ;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

}
