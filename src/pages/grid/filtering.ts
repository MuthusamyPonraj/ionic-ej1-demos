﻿import { Component } from '@angular/core';
import {NorthwindService } from '../../providers/northwind-service/northwind-service';

@Component({
  selector: 'page-grid',
  templateUrl: 'filtering.html',
    providers: [NorthwindService]
})
export class GridFilteringPage {
    public gridData;
  constructor(public northwindService: NorthwindService) {
        this.gridData = northwindService.getOrders();
    }     
}