import { Component, Input, OnInit } from '@angular/core';
import embed from 'vega-embed';

@Component({
  selector: 'app-vega-viz',
  templateUrl: './vega-viz.component.html',
  styleUrls: ['./vega-viz.component.css']
})
export class VegaVizComponent implements OnInit {
  @Input() data: object;

  ngOnInit() {
    const spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "width": 600,
      "height": 300,
      "description": "A simple bar chart with embedded data.",
      "title": "Track Features",
      "data": {
        "values": this.data,
        "format": {"type": "json"}
      },
      "mark": {"type": "circle", "tooltip": {"content": "data"}},
      "encoding": {
        "x": {"field": "Energy", "type": "quantitative", "axis": {"grid": false}},
        "y": {"field": "Danceability", "type": "quantitative", "axis": {"grid": false}}
      }
    } as const;

    embed("#vis",spec);
  }
}
