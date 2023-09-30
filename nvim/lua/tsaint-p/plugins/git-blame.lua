local status, gitblame = pcall(require, "gitblame")
if not status then
  return
end

gitblame.setup({
	gitblame_date_format = '%r'
})
