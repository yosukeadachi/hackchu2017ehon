# 環境構築  
必要なもの node,gulp  

このディレクトリ上で`npm install`  
`gulp serve`でlocalサーバーが立ち上がります  
scssもコンパイルされ、リロードされます。  
gulpがないと言われたら`npm install -g gulp`してください  

# 構造  
`mock/app/`以下がsrcになります。  
scssは`styles/`以下です  
main.scssに追記もしくは新規にscssを作成し、main.scssにimportしてください  
