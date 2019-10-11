import {Component, OnInit} from '@angular/core';
import {BugsRepositoryService} from '../../services/bugs-repository.service';
import {Bug} from '../../model/Bug';

@Component({
  selector: 'codehub-bugs-display',
  templateUrl: './bugs-display.component.html',
  styleUrls: ['./bugs-display.component.scss'],
  providers: [BugsRepositoryService]
})
export class BugsDisplayComponent implements OnInit {

  bugs: Bug[];

  constructor(bugsRepository: BugsRepositoryService) {
    bugsRepository.getBugs().subscribe(bugs => this.getBugs(bugs));
  }

  ngOnInit() {
  }

  public getBugs(bugs) {
    this.bugs = bugs;
  }

}
