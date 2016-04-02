$(document).ready(function() {
    'use script';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
//    var c = Shape.Circle(200, 200, 100);
//    c.fillColor= 'blue';
/*    var c;
    for (var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'blue';*/
    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillcolor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillcolor = 'white';
    text.fontSize = 20;
    text.content = 'hello Dave';
    tool.onMouseDown = function(event) {
//        var c = Shape.Circle(event.point.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
        };
    paper.view.draw();
});
