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
      "title": {"text": "Track Features", "color": "#fff", "fontSize": 20},
      "data": {
        "values": this.data,
        "format": {"type": "json"}
      },
      "mark": {"type": "circle", "size": 80, "color": "#fff", "tooltip": {"content": "data"}},
      "encoding": {
        "x": {"field": "Energy", "type": "quantitative", "axis": {"grid": false}},
        "y": {"field": "Danceability", "type": "quantitative", "axis": {"grid": false}}
      },
      "config": {
        "background": "#333",
        "axis": {
          "labelColor": "#fff",
          "titleColor": "#fff",
          "titleFontSize": 16,
          "titlePadding": 10
        }
      },
    } as const;

    embed("#vis",spec);
  }
}
