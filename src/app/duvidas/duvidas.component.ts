import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-duvidas',standalone: true,
  imports: [CommonModule],
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.scss']
})
export class DuvidasComponent {

  questions = [
    { category: 'servicos', title: 'Quais serviços de psicologia você oferece?', answer: 'Oferecemos terapia individual, Auto-cuidado, Motivacional, Organizacional e terapia online, conforme as necessidades do cliente.', showAnswer: false },
    { category: 'servicos', title: 'Como saber qual plano de acompanhamento é o ideal para mim?', answer: 'A psicóloga irá realizar uma avaliação inicial para entender suas necessidades e sugerir o plano mais adequado para o seu caso.', showAnswer: false },
    { category: 'terapia', title: 'Como funciona a terapia?', answer: 'A terapia é um processo de autoconhecimento e resolução de questões emocionais. Cada sessão é um espaço seguro para você expressar seus sentimentos.', showAnswer: false },
    { category: 'terapia', title: 'Quantas sessões de terapia são necessárias?', answer: 'A quantidade de sessões pode variar de acordo com as necessidades de cada pessoa. Alguns clientes podem precisar de poucas sessões, enquanto outros podem precisar de um acompanhamento contínuo.', showAnswer: false },
    { category: 'pagamento', title: 'Quais são as formas de pagamento aceitas?', answer: 'Aceitamos pagamento via transferência bancária, débito, PIX e pagamento em dinheiro.', showAnswer: false },
    { category: 'pagamento', title: 'Existem planos de desconto para clientes que fazem mais de uma consulta por mês?', answer: 'Sim, oferecemos descontos especiais para pacotes de consultas mensais. Entre em contato para mais detalhes.', showAnswer: false },
    { category: 'privacidade', title: 'Como é garantida a confidencialidade dos atendimentos?', answer: 'Todos os atendimentos são confidenciais, conforme o Código de Ética do Psicólogo. As informações compartilhadas nas sessões são mantidas em sigilo.', showAnswer: false },
    { category: 'privacidade', title: 'Minha privacidade é protegida em consultas online?', answer: 'Sim, utilizamos plataformas seguras para realizar consultas online, garantindo a privacidade e segurança dos dados dos nossos clientes.', showAnswer: false }
  ];

  filteredQuestions = [...this.questions]; 
  showCards = false; 
  activeCategory: string | null = null; 

  // Filtra os cards conforme a categoria e alterna a visibilidade
  filterCards(category: string): void {
    // Se a categoria já estiver ativa, fecha os cards
    if (this.activeCategory === category) {
      this.showCards = false;
      this.activeCategory = null; // Reseta a categoria ativa
    } else {
      this.filteredQuestions = this.questions.filter(q => q.category === category);
      this.showCards = true; 
      this.activeCategory = category; // Define a nova categoria ativa
    }
  }

  // Alterna a exibição da resposta ao clicar no card
  toggleAnswer(question: any): void {
    question.showAnswer = !question.showAnswer;
  }
}
