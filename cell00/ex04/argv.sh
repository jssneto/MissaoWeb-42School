if [ $# -eq 0 ]; then
	echo "Nenhum argumento passado."
else
	echo "Argumentos passados:"
	for arg in ${@:1:3}; do
		echo "$arg"
	done
fi