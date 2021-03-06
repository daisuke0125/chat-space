$(document).on('turbolinks:load', function(){
$(function() {
  var user_list = $("#user-search-result");
  var member_list = $("#member-search-result");

  function appendUsers(user) {
    var html = `<div class="chat-group-user clearfix ">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`

    user_list.append(html);
  }

  function appendMembers(name, user_id) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-id'>
                  <input name='group[user_ids][]' type='hidden' value="${user_id}">
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`

    member_list.append(html);
  }

  function appendNoUser(user){
    var html = `<div class='chat-group-user clearfix'>${ user }</div>`
    user_list.append(html);
  }

  $(".chat-group-form__field.clearfix").on("keyup", function() {
    var input = $("#user-search-field").val();
    if (input == 0) {
    } else {
      $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(members) {
      $("#user-search-result").empty();
        if(members.length !== 0) {
          members.forEach(function(user){
            appendUsers(user); 
          })
        }
        else {
          appendNoUser("一致するユーザはいません");
        }
      })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
    }  
  })

  $(function() {
    $(document).on("click", '.user-search-add',function() {
      var name = $(this).attr("data-user-name");
      var user_id = $(this).attr("data-user-id");
      $(this).parent().remove();
      appendMembers(name, user_id);
    });
    $(document).on("click", '.user-search-remove',function() {
      $(this).parent().remove();
    });
  });
});
});
