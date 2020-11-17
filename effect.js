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
  .attr("fill", "#f1f1ef");
}

function mouseout(event, d){
  d3.select(this).select("text")
    .attr("fill", "#3b3f3e");
}

function click(event, d){ //toggle 가능?
  var node = d3.select(this);

  var isClicked = node.attr("click");
  if(isClicked == "true"){
    node.attr("click", "false");
    node.select("text")
      .attr("fill", "#f1f1ef");
    node.on("mouseout", mouseout);
    node.on("mouseover", mouseover);

    node.select("circle").attr("stroke", "#fff");
  }
  else{
    node.attr("click", "true");

    node.select("text")
      .attr("fill", "#2c2c2c");
    node.on("mouseout", null);
    node.on("mouseover", null);

    node.select("circle").attr("stroke", "#2c2c2c");
    
    document.getElementById("header-text").append(d.data.name);
    document.getElementById("body-text").append(d.data.para);
    showmodal();
    
  }
}

function showmodal(){
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  // close button
  span.addEventListener('click', function() {
    modal.style.display = "none";
    document.getElementById("header-text").innerText = '';
    document.getElementById("body-text").innerText = '';
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById("header-text").innerText = '';
      document.getElementById("body-text").innerText = '';
    }
  }

  modal.style.display = "block";
}

scale = size => {
    if(size == null) return 30;
    if(size < 100) return 10;
    else if(size < 300) return size / 10;
    else return 30;
}

color = comm => { /* 종류가 10가지 */
    if(comm == null) return "#abcdef" /* 제목 노드*/
    // var num = comm % 12;
    return d3.schemeSet3[comm];
}
