function reset() {
  $(".boxes.horizontal").attr("class", "boxes horizontal");
  $(".boxes.vertical").attr("class", "boxes vertical");
  $(".boxes.horizontal.vertical").attr("class", "boxes horizontal vertical");
  $(".boxes").attr("class", "boxes");
}
function win(a) {
  if (a == 2) {
    $("body").addClass("won");
    $(".boxes").unbind();
    $("h1").text("Cross won!");
  }
  if (a == 1) {
    $("body").addClass("won");
    $(".boxes").unbind();
    $("h1").text("Circle won!");
  }
}
function checkwin() {
  if (answer[0] == answer[1] && answer[0] == answer[2]) {
    if (answer[0] == 1) {
      win(1);
    } else if (answer[0] == 2) {
      win(2);
    }
  }
  if (answer[3] == answer[4] && answer[3] == answer[5]) {
    if (answer[3] == 1) {
      win(1);
    } else if (answer[3] == 2) {
      win(2);
    }
  }
  if (answer[6] == answer[7] && answer[6] == answer[8]) {
    if (answer[6] == 1) {
      win(1);
    } else if (answer[6] == 2) {
      win(2);
    }
  }
  if (answer[0] == answer[4] && answer[0] == answer[8]) {
    if (answer[0] == 1) {
      win(1);
    } else if (answer[0] == 2) {
      win(2);
    }
  }
  if (answer[2] == answer[4] && answer[2] == answer[6]) {
    if (answer[2] == 1) {
      win(1);
    } else if (answer[2] == 2) {
      win(2);
    }
  }
  if (answer[0] == answer[3] && answer[0] == answer[6]) {
    if (answer[0] == 1) {
      win(1);
    } else if (answer[0] == 2) {
      win(2);
    }
  }
  if (answer[1] == answer[4] && answer[1] == answer[7]) {
    if (answer[1] == 1) {
      win(1);
    } else if (answer[1] == 2) {
      win(2);
    }
  }
  if (answer[2] == answer[5] && answer[2] == answer[8]) {
    if (answer[2] == 1) {
      win(1);
    } else if (answer[2] == 2) {
      win(2);
    }
  }
}

var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var clickno = 0;
$(".boxes").click(function () {
  clickno += 1;
  if (clickno % 2 == 0) {
    $(this).addClass("clicked-cross");
    answer[parseInt($(this)[0]["id"]) - 1] = 2;
  } else {
    $(this).addClass("clicked-circle");
    answer[parseInt($(this)[0]["id"]) - 1] = 1;
  }
  console.log(clickno);
  $(this).unbind();
  if (clickno >= 5) checkwin();
  console.log(answer);
});
