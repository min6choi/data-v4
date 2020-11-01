//make <svg></svg> tag in your html file

//data load
d3.json("data.json")
  .then((json) => {
    data = json;
    update();
  })
  .catch(e => {console.log(e);}); 

// inner functions
drag = simulation => {
  
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

scale = size => {
    if(size == null) return 30;
    const newsize = size/10;
    if(newsize > 20)
      return newsize/3;
    else return newsize;
}

color = comm => {
    if(comm == null) return "#abcdef"
    var num = comm % 12;
    return d3.schemeSet3[num];
}


// draw graph
var height = 700;
var width = 800;
var data;


function update(){
    console.log(data);
    var root = d3.hierarchy(data);
    var links = root.links();
    var nodes = root.descendants();
  
    var simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(15).strength(0.7))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("x", d3.forceX())
        .force("y", d3.forceY());
  
    var svg = d3.select("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle");
  
    var link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");
  
    
    var node = svg.append("g").selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(drag(simulation));
    
    var circle = node.append("circle")
      .join("circle")
      .attr("fill", d=>color(d.data.comm))
      .attr("stroke", "#fff")
      .attr("r", d => scale(d.data.size));
    
    var name = node.append("text")
        .text(d=>d.data.name)
        .style("font-size", "1em")
        .style("color", "#2c2c2c");
    
    simulation.on("tick", () => {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
  
      circle
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
      
      name
        .attr("dx", d=>d.x)
        .attr("dy", d=>d.y + 5);
    });
  }