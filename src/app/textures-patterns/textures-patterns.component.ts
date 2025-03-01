// textures-patterns.component.ts
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-textures-patterns',
  templateUrl: './textures-patterns.component.html',
  styleUrls: ['./textures-patterns.component.css']
})
export class TexturesPatternsComponent implements OnInit, OnDestroy {
  @ViewChild('paleIris', { static: true }) paleIrisRef!: ElementRef;
  @ViewChild('dots', { static: true }) dotsRef!: ElementRef;
  @ViewChild('paths', { static: true }) pathsRef!: ElementRef;
  @ViewChild('lines', { static: true }) linesRef!: ElementRef;

  loaded = false;
  scriptElement: HTMLScriptElement | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadTexturesLibrary();
  }

  ngOnDestroy(): void {
    if (this.scriptElement) {
      document.body.removeChild(this.scriptElement);
    }
  }

  loadTexturesLibrary(): void {
    // Cargar Textures.js desde CDN
    this.scriptElement = document.createElement('script');
    this.scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/textures/1.2.3/textures.min.js';
    this.scriptElement.async = true;
    this.scriptElement.onload = () => {
      this.loaded = true;
      this.renderTextures();
    };
    document.body.appendChild(this.scriptElement);
  }

  renderTextures(): void {
    if (!this.loaded || !(window as any).textures) return;
    
    const textures = (window as any).textures;
    
    // Limpiar SVGs previos
    d3.selectAll(".texture-container svg").remove();
    
    // Textura Pale Iris
    const svgIris = d3.select(this.paleIrisRef.nativeElement)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 200 200");
      
    // Crear gradiente radial para efecto tipo iris
    const defs = svgIris.append("defs");
    
    const gradient = defs.append("radialGradient")
      .attr("id", "iris-gradient")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%");
      
    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#e0cdff");
    
    gradient.append("stop")
      .attr("offset", "70%")
      .attr("stop-color", "#c4a8ff");
    
    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#9370db");
    
    // Añadir textura iris con líneas
    const irisTexture = textures.lines()
      .size(4)
      .strokeWidth(1)
      .stroke("#ffffff")
      .background("url(#iris-gradient)")
      .orientation("3/8");
    
    svgIris.call(irisTexture);
    
    svgIris.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("fill", irisTexture.url());
    
    // Textura de Puntos
    const svgDots = d3.select(this.dotsRef.nativeElement)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 200 200");
    
    const dotsTexture = textures.circles()
      .size(5)
      .radius(2)
      .fill("#9370db")
      .background("#f0e6ff");
    
    svgDots.call(dotsTexture);
    
    svgDots.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("fill", dotsTexture.url());
    
    // Textura de Caminos
    const svgPaths = d3.select(this.pathsRef.nativeElement)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 200 200");
    
    const pathsTexture = textures.paths()
      .d("woven")
      .stroke("#b48eff")
      .strokeWidth(1)
      .background("#f5f0ff");
    
    svgPaths.call(pathsTexture);
    
    svgPaths.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("fill", pathsTexture.url());
    
    // Textura de Líneas
    const svgLines = d3.select(this.linesRef.nativeElement)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 200 200");
    
    const linesTexture = textures.lines()
      .orientation("diagonal")
      .size(6)
      .strokeWidth(1)
      .stroke("#8a63d2")
      .background("#e6deff");
    
    svgLines.call(linesTexture);
    
    svgLines.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("fill", linesTexture.url());
  }
}