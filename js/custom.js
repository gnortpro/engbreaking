$(function() {
  $(".navbar-toggle").click(function() {
    $("#sidebar").css("left", 0);
    $("body").addClass("sidebaractive");
  });
  $(".close-sidebar").click(function() {
    $("#sidebar").css("left", "-330px");
    $("body").removeClass("sidebaractive");
  });

  $(".btn-dathangngay").click(function() {
    $("html, body").animate({ scrollTop: $(".top7").offset().top }, 1000);
  });
  $(".totop").click(function() {
    $("html, body").animate({ scrollTop: $("#header").offset().top }, 800);
  });
  // effect notification

  var namedathangg = [
    "Trần Hà ",
    " ngô hường ",
    " Nguyen Thanh duoc ",
    " Nguyễn thị thanh trà ",
    " minh hiếu ",
    " Trần Kỳ Hoa ",
    " Võ hữu tiến ",
    " Anh Phát ",
    " Nguyễn Thị Việt Anh ",
    " Ngọc Huyền ",
    " Phạm Thị Thủy Cúc ",
    " Phạm Văn Long ",
    " Hồ trọng nhân ",
    " Phan ngô hạnh Uyên ",
    " Trần Hồng Trúc Mai ",
    " Nguyễn Minh Hải ",
    " Anh Đông ",
    " Anh Danh ",
    " Phạm Thị Thủy ",
    " Nguyễn Thị Hồng Loan ",
    " Nguyễn Việt hoàn ",
    " Nguyễn Anh Ngọc ",
    " Lê  thị  diễm ",
    " Trần Thị Bích Trâm ",
    " Lê Thịnh ",
    " Vũ thảo ngọc ",
    " Lưu thị huệ ",
    " Đỗ Hồng Vân ",
    " Nguyễn Lương Hồng ",
    " Chị Trang ",
    " Lâm văn Hiệp ",
    " Nguyễn Thị Ngọc ",
    " Lê Tuấn Cảnh ",
    " Cử ",
    " Huỳnh như ",
    " vũ mạnh thắng ",
    " Phan Anh Tuấn ",
    " Nguyễn Hoàng Phương Anh ",
    " Nguyễn Văn Trung ",
    " lê chí minh ",
    " Khôi Nguyên ",
    " Hà trang ",
    " Nguyễn thị thúy ",
    " TRẦN VĨNH HÀ ",
    " Nguyen Tran Phuong Nghi ",
    " Nguyên duê ",
    " Hoàng cúc ",
    " Nguyễn Thị Thanh Huyền ",
    " Nguyễn Huỳnh Nhật Giang ",
    " Nguyễn Thi Hong Nhung ",
    " ngoc yen ",
    " Lê Tánh Linh ",
    " Đỗ viết Hùng ",
    " Vương tấn hung ",
    " trần thị thùy trang ",
    " Anh Sanh ",
    " Đoàn Thị Lam Phương ",
    " trần thị trâm châu ",
    " Chị Nhung ",
    " Lê Văn Toán ",
    " Pham dinh khang ",
    " Trần Tuấn Minh ",
    " Đặng thị Vân ",
    " Nguyễn Đức minh ",
    " Nguyễn Thị Vân Bình ",
    " Nguyễn Thị Quyên ",
    " văn thị hồng vân ",
    " Nguyễn thị tuyết Mai ",
    " Lê Quang Huy ",
    " Vũ Long ",
    " Phạm Việt Quang ",
    " Vương Sỹ Quân ",
    " Hồ Thị Diễm Châu ",
    " Nguyễn thị phương thảo ",
    " Nguyễn thị sửu ",
    " trịnh thanh bạch ",
    " Lê thị Nguyệt ",
    " Nguyễn Thị Thu Hằng ",
    " Dau quang tuyen ",
    " Tô Thanh Phát ",
    " Trương thị thanh thảo ",
    " Nguyễn thanh trúc ",
    " Trương Nam Chi ",
    " Liên ",
    " Thy ",
    " Vân ",
    " Trịnh Mai Thy ",
    " Phượng Hoàng ",
    " Nguyen Thi NGOC Ha ",
    " Vũ Minh Đức ",
    " Lường Văn Long ",
    " Thái Bảo Trân ",
    " đỗ thị ngọc huyền ",
    " Trần Văn Dững ",
    " Phạm hoài thanh ",
    " Nguyễn thị thanh hà ",
    " Dung"
  ];
  var diachidathangg = [
    "Bà Rịa - Vũng Tàu ",
    " Đắk Nông ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Thừa Thiên Huế ",
    " Phú Thọ ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Đồng Nai ",
    " Lâm Đồng ",
    " Nghệ An ",
    " Thái Bình ",
    " Lâm Đồng ",
    " Hà Nam ",
    " Bình Dương ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Đắk Lắk ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hải Phòng ",
    " Tây Ninh ",
    " Hải Dương ",
    " Đắk Lắk ",
    " Hà Nội ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Quảng Ninh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Nam Định ",
    " Long An ",
    " Hà Nội ",
    " Hà Nội ",
    " Bạc Liêu ",
    " Bình Dương ",
    " Hồ Chí Minh ",
    " Bắc Ninh ",
    " Bình Dương ",
    " Hải Phòng ",
    " Lâm Đồng ",
    " Bắc Ninh ",
    " Thừa Thiên Huế ",
    " Quảng Ngãi ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Bình Thuận ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Bình Dương ",
    " Hồ Chí Minh ",
    " Tây Ninh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Đồng Nai ",
    " Hà Nội ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Long An ",
    " Bà Rịa - Vũng Tàu ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Thanh Hóa ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Thanh Hóa ",
    " Trà Vinh ",
    " Quảng Ninh ",
    " Hà Nội ",
    " Trà Vinh ",
    " Lâm Đồng ",
    " Bà Rịa - Vũng Tàu ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Gia Lai ",
    " Hồ Chí Minh ",
    " Long An ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Vĩnh Phúc ",
    " Hà Nội ",
    " Hà Nội ",
    " Long An ",
    " Đắk Lắk ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Hà Nội ",
    " Nghệ An ",
    " Hồ Chí Minh ",
    " Bình Dương ",
    " Bắc Ninh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Hà Nội ",
    " Đồng Nai ",
    " Bình Dương ",
    " Bình Dương ",
    " Hồ Chí Minh ",
    " Hải Phòng ",
    " Hà Nội ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Đồng Nai ",
    " Lâm Đồng ",
    " Đồng Nai ",
    " An Giang ",
    " Hồ Chí Minh ",
    " Khánh Hòa ",
    " Bà Rịa - Vũng Tàu ",
    " Hồ Chí Minh ",
    " Bình Dương ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Thừa Thiên Huế ",
    " Hải Phòng ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hồ Chí Minh ",
    " Hà Nội ",
    " Vĩnh Phúc ",
    " Bình Dương ",
    " Hải Dương ",
    " Đồng Nai ",
    " Đà Nẵng ",
    " Hà Nội"
  ];
  setInterval(function() {
    var random_name =
      namedathangg[Math.floor(Math.random() * namedathangg.length)];
    var random_diachi =
      diachidathangg[Math.floor(Math.random() * diachidathangg.length)];
    $("#tendathang").text(random_name);
    $("#diachidathang").text(random_diachi);
  }, 8001);
  setInterval(function() {
    $(".custom-social-proof")
      .stop()
      .slideToggle("slow");
  }, 8000);
  // $(".custom-close").click(function() {
  //   $(".custom-social-proof")
  //     .stop()
  //     .slideToggle("slow");
  // });
  //random number
  var min = 11;
  var max = 19;
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
  $("#random-number").text(random);
  // counter
  var counter = {};
  window.addEventListener("load", function() {
    // COUNTDOWN IN SECONDS
    // EXAMPLE - 5 MINS = 5 X 60 = 300 SECS
    counter.end = 3000;

    // Get the containers
    counter.min = document.getElementById("cd-min");
    counter.sec = document.getElementById("cd-sec");
    counter.hour = document.getElementById("cd-hour");
    counter.day = document.getElementById("cd-day");

    // Start if not past end date
    if (counter.end > 0) {
      counter.ticker = setInterval(function() {
        // Stop if passed end time
        counter.end--;
        if (counter.remain <= 0) {
          clearInterval(counter.ticker);
        }

        // Calculate remaining time
        var secs = counter.end;
        var mins = Math.floor(secs / 60); // 1 min = 60 secs
        var hour = Math.floor(secs / 3600); // 1 min = 60 secs
        var day = Math.floor(secs / 86400); // 1 min = 60 secs
        secs -= mins * 60;

        // Update HTML
        if (mins < 10) {
          counter.min.innerHTML = "0" + mins;
        } else {
          counter.min.innerHTML = mins;
        }

        if (secs < 10) {
          counter.sec.innerHTML = "0" + secs;
        } else {
          counter.sec.innerHTML = secs;
        }
        if (hour < 10) {
          counter.hour.innerHTML = "0" + hour;
        } else {
          counter.hour.innerHTML = hour;
        }

        if (day < 10) {
          counter.day.innerHTML = "0" + day;
        } else {
          counter.day.innerHTML = day;
        }
      }, 1000);
    }
  });
});
