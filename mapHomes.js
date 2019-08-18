
  <script>
      var w = "960"
      var h = "600"

      console.log("attempt to set up svg");

      var svg = d3.select("body")
            .append("svg")
            .attr("width" = w)
            .attr("height" = h);

      //Makes circles travel accross entire screen
      svg.append("rect")
        .attr("width", w)
        .attr("height", h)
        .attr("opacity", 0.5)
        //.style("fill", "black");

    </script>