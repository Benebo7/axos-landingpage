# Instalação da Fonte GT Alpina

## Passo 1: Baixar a fonte GT Alpina

A fonte **GT Alpina** é uma fonte comercial da **Grilli Type**. Para usar essa fonte no projeto, você precisa:


### Opção 1: Versão Trial (apenas para testes/mockups)
1. Acesse: https://www.grillitype.com/free-trial-fonts
2. Preencha o formulário com seu email
3. Você receberá um email com os arquivos de fonte trial
4. Extraia os arquivos `.woff2` e `.woff` da pasta GT Alpina

### Opção 2: Comprar a licença (para produção)
1. Acesse: https://www.grillitype.com/typeface/gt-alpina
2. Compre a licença da fonte GT Alpina Standard
3. Baixe os arquivos de fonte nos formatos `.woff2` e `.woff`

## Passo 2: Adicionar os arquivos de fonte ao projeto

1. Coloque os arquivos de fonte na pasta: `public/fonts/`
2. Os arquivos necessários são:
   - `GT-Alpina-Trial-Light.woff2` (peso 300)
   - `GT-Alpina-Trial-Light.woff` (peso 300)
   - `GT-Alpina-Trial-Regular.woff2` (peso 400)
   - `GT-Alpina-Trial-Regular.woff` (peso 400)
   - `GT-Alpina-Trial-Bold.woff2` (peso 700)
   - `GT-Alpina-Trial-Bold.woff` (peso 700)

## Passo 3: Verificar a configuração

A fonte já está configurada no arquivo `styles/globals.css` com as declarações `@font-face` necessárias.

O componente hero (`components/ui/hero-section-1.tsx`) já está usando a fonte GT Alpina com:
- Font family: 'GT Alpina'
- Font weight: 300 (Light)
- Font size: 76px (responsivo)
- Line height: 1.2
- Letter spacing: -0.032em

## Passo 4: Testar

Após adicionar os arquivos de fonte:
1. Reinicie o servidor de desenvolvimento: `npm run dev`
2. Abra o navegador e verifique se a fonte está sendo carregada corretamente
3. No DevTools do navegador, vá em Network > Fonts para verificar se os arquivos estão sendo carregados

## Observações

- A versão trial da fonte tem um conjunto de caracteres reduzido
- Para produção, você precisa comprar a licença completa
- Se os arquivos de fonte não estiverem disponíveis, o navegador usará a fonte serif padrão como fallback




