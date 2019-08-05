import { Component, OnInit } from '@angular/core';

// Services
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.itemService.getItems().subscribe(items => {
      console.log(items);
    })

  }

}
