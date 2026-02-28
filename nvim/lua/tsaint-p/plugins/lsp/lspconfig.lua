-- import cmp-nvim-lsp safely
local cmp_status, cmp_nvim_lsp = pcall(require, "cmp_nvim_lsp")
if not cmp_status then
  return
end

local keymap = vim.keymap

-- on_attach
local on_attach = function(_, bufnr)
  local opts = { noremap = true, silent = true, buffer = bufnr }

  keymap.set("n", "gD", vim.lsp.buf.declaration, opts)
  keymap.set("n", "gd", vim.lsp.buf.definition, opts)
  keymap.set("n", "gi", vim.lsp.buf.implementation, opts)
  keymap.set("n", "K", vim.lsp.buf.hover, opts)
  keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts)
  keymap.set("n", "<leader>ca", vim.lsp.buf.code_action, opts)
  keymap.set("n", "[d", vim.diagnostic.goto_prev, opts)
  keymap.set("n", "]d", vim.diagnostic.goto_next, opts)
end

local capabilities = cmp_nvim_lsp.default_capabilities()

-- diagnostic icons
local signs = { Error = " ", Warn = " ", Hint = "ﴞ ", Info = " " }
for type, icon in pairs(signs) do
	vim.diagnostic.config({
	  virtual_text = {
		prefix = "●", -- peut être "●", "▎", "■", etc.
		spacing = 4,
	  },
	  signs = true,
	  underline = true,
	  severity_sort = true,
	})
end

-- =========================
-- CLANGD
-- =========================
vim.lsp.config("clangd", {
  capabilities = capabilities,
  on_attach = on_attach,
})

vim.lsp.enable("clangd")

-- =========================
-- PYRIGHT
-- =========================
vim.lsp.config("pyright", {
  capabilities = capabilities,
  on_attach = on_attach,
})

vim.lsp.enable("pyright")

-- =========================
-- LUA LS
-- =========================
vim.lsp.config("lua_ls", {
  capabilities = capabilities,
  on_attach = on_attach,
  settings = {
    Lua = {
      runtime = {
        version = "LuaJIT",
      },
      diagnostics = {
        globals = { "vim" },
      },
      workspace = {
        checkThirdParty = false,
        library = vim.api.nvim_get_runtime_file("", true),
      },
      telemetry = {
        enable = false,
      },
    },
  },
})

vim.lsp.enable("lua_ls")
