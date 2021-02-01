//make <svg></svg> tag in your html file

//data load
d3.json("data.json")
  .then((json) => {
    data = json;
    update();
  })
  .catch(e => {console.log(e);}); 

// draw graph
var height = 700;
var width = 1420;
var data;

function update(){
    var root = d3.hierarchy(data);
    var links = root.links();
    var nodes = root.descendants();
  
    var simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(32).strength(0.9))
        .force("charge", d3.forceManyBody().strength(-230))
        .force("x", d3.forceX())
        .force("y", d3.forceY());
  
    var svg = d3.select("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("font-size", 10)
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
        .attr("click", "false")
        .call(drag(simulation))
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)
        .on('click', click);
    
    var circle = node.append("circle")
      .join("circle")
      .attr("fill", d=>color(d.data.comm))
      .attr("stroke", "#fff")
      .attr("r", d => scale(d.data.size));
    
    var name = node.append("text")
        .text(d=>d.data.name)
        .style("font-size", "1em")
        .attr("fill", "#3b3f3e");
    
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