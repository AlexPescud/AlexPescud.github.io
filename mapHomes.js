<!DOCTYPE HTML>
<html lang = "en">
<head>
  <!-- basic.html -->
  <title>basic</title>
  <meta charset = "UTF-8" />
</head>
<body>
  <script src="/d3.min.js"></script>

  <h1>Level One Headline</h1>
  <p>
    This is a paragraph.
    Note that the text is automatically wrapped.
  </p>
  <script>
      var w = "960"
      var h = "600"

      //console.log("attempt to set up svg");

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
</body>
</html>

  <!doctype html>
<html lang="en">
<html>
  <head>
    <meta charset="utf-8">
    <title>My first map in D3</title> 
  </head>
  <body>
    <H1>Example</H1>
    <script src="//d3js.org/d3.v4.min.js"></script> 
    <script> your code goes here </script>
  </body>
</html>
