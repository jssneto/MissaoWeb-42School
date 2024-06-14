if [ $# -eq 0 ]; then
    echo "Erro: Digite o nome da pasta Ex: <nome_da_pasta>"
    exit 1
fi


for arg in "$@"; do
  if [ ! -d "$arg" ]; then
    mkdir "ex$arg"

  fi
done
