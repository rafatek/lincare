claude code --instruction "Analise o código HTML/CSS do site da Lincare e corrija os problemas de responsividade mobile identificados:

1. Imagens não estão mantendo aspect-ratio correto - adicione object-fit: cover e height fixo proporcional
2. Imagem decorativa em formato coração na seção Nossos Valores está cortada/descentralizada - ajuste posicionamento e dimensões
3. Cards de Assistência Domiciliar, Internação Domiciliar e Atendimento 24h precisam de padding e margin melhor ajustados para mobile
4. Imagens nos cards podem estar esticadas - corrigir aspect-ratio com object-fit
5. Botões 'Saiba mais' precisam de mais espaçamento vertical (margin-top)
6. Verificar breakpoints para mobile (max-width: 768px) e ajustar todos os elementos
7. Garantir que imagens e cards fiquem centralizados e bem proporcionados em telas pequenas

Faça as correções necessárias no CSS com media queries adequadas e teste a responsividade."