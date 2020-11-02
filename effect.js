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

function mouseover(event, d){
  d3.select(this).select("text")
  .attr("fill", "#2c2c2c");
}

function mouseout(event, d){
  d3.select(this).select("text")
    .attr("fill", "#f1f1ef");
}

function click(event, d){
  d3.select(this).select("text")
    .attr("fill", "#2c2c2c");
  d3.select(this).on("mouseout", null);
  d3.select(this).on("mouseover", null);
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
