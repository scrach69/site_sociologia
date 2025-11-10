<script>
        // JavaScript para a interatividade (alternar os detalhes)
        function toggleDetails(element) {
            // Encontra a div de detalhes dentro do elemento clicado (container)
            const details = element.querySelector('.details');
            const content = element.querySelector('.content');

            // Alterna a classe 'show' no elemento 'details' (que faz a mágica da expansão no CSS)
            details.classList.toggle('show');
            // Opcional: Adicionar um destaque ao container quando estiver aberto
            content.classList.toggle('active');
        }
    </script>