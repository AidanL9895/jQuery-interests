$(document).ready(function() {
    $('#addShow').on('click', function() {
      const showName = $('#showInput').val().trim();
      if (showName === "") return;
  
      const $li = $('<li></li>').addClass('unwatched').text(showName);
      const $btnGroup = $('<span class="action-buttons"></span>');
  
      const $watchedBtn = $('<button>Mark Watched</button>').addClass('watch-btn');
      const $removeBtn = $('<button>Remove</button>').addClass('remove-btn');
  
      $btnGroup.append($watchedBtn).append($removeBtn);
      $li.append($btnGroup);
      $('#watchlist').append($li);
      $('#showInput').val('');
    });
  
    $('#watchlist').on('click', '.watch-btn', function() {
      const $li = $(this).closest('li');
      if ($li.hasClass('unwatched')) {
        $li.removeClass('unwatched').addClass('watched');
        $(this).text('Mark Unwatched');
      } else {
        $li.removeClass('watched').addClass('unwatched');
        $(this).text('Mark Watched');
      }
    });
  
    $('#watchlist').on('click', '.remove-btn', function() {
      $(this).closest('li').fadeOut(300, function() {
        $(this).remove();
      });
    });
  
    $('#statusFilter').on('change', function() {
      const selected = $(this).val();
      $('#watchlist li').each(function() {
        const isWatched = $(this).hasClass('watched');
        if (selected === 'watched' && !isWatched) {
          $(this).hide();
        } else if (selected === 'unwatched' && isWatched) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    });
  });
  