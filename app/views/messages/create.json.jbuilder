# json.user_name    @message.user.name
# json.content    @message.content
# json.time    @message.created_at.strftime("%Y/%m/%d %H:%M")
# json.id    @message.id
# json.image   @message.image.url

json.(@message, :content, :image)
json.created_at @message.created_at
json.user_name @message.user.name
#idもデータとして渡す
json.id @message.id