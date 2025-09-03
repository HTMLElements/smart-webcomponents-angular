import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule, GridColumn } from '@smart-webcomponents-angular/grid';
import { DropDownListModule, DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, DropDownListModule,  GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
  @ViewChild('localization', { read: DropDownListComponent, static: false }) localization!: DropDownListComponent;

  columnsLocales = {
    en: [
      { label: "Task" },
      { label: "Due Date", dataType: "date" },
      {
        label: "Status",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "Not Started", value: "Not Started" },
          { color: "#FFEBB6", label: "In Progress", value: "In Progress" },
          { color: "#D1F7C4", label: "Completed", value: "Completed" }
        ]
      },
      {
        label: "Priority",
        template: "tags",
        options: [
          { color: "#DD5347", label: "High", value: "High" },
          { color: "#039BE5", label: "Medium", value: "Medium" },
          { color: "#33B679", label: "Low", value: "Low" }
        ]
      },
      { label: "Notes" }
    ],
    fr: [
      { label: "Tâche" },
      { label: "Date d'échéance", dataType: "date" },
      {
        label: "Statut",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "Non commencé", value: "Not Started" },
          { color: "#FFEBB6", label: "En cours", value: "In Progress" },
          { color: "#D1F7C4", label: "Terminé", value: "Completed" }
        ]
      },
      {
        label: "Priorité",
        template: "tags",
        options: [
          { color: "#DD5347", label: "Élevée", value: "High" },
          { color: "#039BE5", label: "Moyenne", value: "Medium" },
          { color: "#33B679", label: "Faible", value: "Low" }
        ]
      },
      { label: "Notes" }
    ],
    de: [
      { label: "Aufgabe" },
      { label: "Fälligkeitsdatum", dataType: "date" },
      {
        label: "Status",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "Nicht gestartet", value: "Not Started" },
          { color: "#FFEBB6", label: "In Bearbeitung", value: "In Progress" },
          { color: "#D1F7C4", label: "Abgeschlossen", value: "Completed" }
        ]
      },
      {
        label: "Priorität",
        template: "tags",
        options: [
          { color: "#DD5347", label: "Hoch", value: "High" },
          { color: "#039BE5", label: "Mittel", value: "Medium" },
          { color: "#33B679", label: "Niedrig", value: "Low" }
        ]
      },
      { label: "Notizen" }
    ],
    es: [
      { label: "Tarea" },
      { label: "Fecha de vencimiento", dataType: "date" },
      {
        label: "Estado",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "No iniciado", value: "Not Started" },
          { color: "#FFEBB6", label: "En progreso", value: "In Progress" },
          { color: "#D1F7C4", label: "Completado", value: "Completed" }
        ]
      },
      {
        label: "Prioridad",
        template: "tags",
        options: [
          { color: "#DD5347", label: "Alta", value: "High" },
          { color: "#039BE5", label: "Media", value: "Medium" },
          { color: "#33B679", label: "Baja", value: "Low" }
        ]
      },
      { label: "Notas" }
    ],
    it: [
      { label: "Compito" },
      { label: "Data di scadenza", dataType: "date" },
      {
        label: "Stato",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "Non iniziato", value: "Not Started" },
          { color: "#FFEBB6", label: "In corso", value: "In Progress" },
          { color: "#D1F7C4", label: "Completato", value: "Completed" }
        ]
      },
      {
        label: "Priorità",
        template: "tags",
        options: [
          { color: "#DD5347", label: "Alta", value: "High" },
          { color: "#039BE5", label: "Media", value: "Medium" },
          { color: "#33B679", label: "Bassa", value: "Low" }
        ]
      },
      { label: "Note" }
    ],
    nl: [
      { label: "Taak" },
      { label: "Vervaldatum", dataType: "date" },
      {
        label: "Status",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "Niet gestart", value: "Not Started" },
          { color: "#FFEBB6", label: "Bezig", value: "In Progress" },
          { color: "#D1F7C4", label: "Voltooid", value: "Completed" }
        ]
      },
      {
        label: "Prioriteit",
        template: "tags",
        options: [
          { color: "#DD5347", label: "Hoog", value: "High" },
          { color: "#039BE5", label: "Middel", value: "Medium" },
          { color: "#33B679", label: "Laag", value: "Low" }
        ]
      },
      { label: "Notities" }
    ],
    pt: [
      { label: "Tarefa" },
      { label: "Data de vencimento", dataType: "date" },
      {
        label: "Status",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "Não iniciado", value: "Not Started" },
          { color: "#FFEBB6", label: "Em andamento", value: "In Progress" },
          { color: "#D1F7C4", label: "Concluído", value: "Completed" }
        ]
      },
      {
        label: "Prioridade",
        template: "tags",
        options: [
          { color: "#DD5347", label: "Alta", value: "High" },
          { color: "#039BE5", label: "Média", value: "Medium" },
          { color: "#33B679", label: "Baixa", value: "Low" }
        ]
      },
      { label: "Notas" }
    ],
    ru: [
      { label: "Задача" },
      { label: "Срок выполнения", dataType: "date" },
      {
        label: "Статус",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "Не начато", value: "Not Started" },
          { color: "#FFEBB6", label: "В процессе", value: "In Progress" },
          { color: "#D1F7C4", label: "Выполнено", value: "Completed" }
        ]
      },
      {
        label: "Приоритет",
        template: "tags",
        options: [
          { color: "#DD5347", label: "Высокий", value: "High" },
          { color: "#039BE5", label: "Средний", value: "Medium" },
          { color: "#33B679", label: "Низкий", value: "Low" }
        ]
      },
      { label: "Примечания" }
    ],
    zh: [
      { label: "任务" },
      { label: "截止日期", dataType: "date" },
      {
        label: "状态",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "未开始", value: "Not Started" },
          { color: "#FFEBB6", label: "进行中", value: "In Progress" },
          { color: "#D1F7C4", label: "已完成", value: "Completed" }
        ]
      },
      {
        label: "优先级",
        template: "tags",
        options: [
          { color: "#DD5347", label: "高", value: "High" },
          { color: "#039BE5", label: "中", value: "Medium" },
          { color: "#33B679", label: "低", value: "Low" }
        ]
      },
      { label: "备注" }
    ],
    ja: [
      { label: "タスク" },
      { label: "期限", dataType: "date" },
      {
        label: "ステータス",
        template: "tags",
        options: [
          { color: "#EDEDED", label: "未着手", value: "Not Started" },
          { color: "#FFEBB6", label: "進行中", value: "In Progress" },
          { color: "#D1F7C4", label: "完了", value: "Completed" }
        ]
      },
      {
        label: "優先度",
        template: "tags",
        options: [
          { color: "#DD5347", label: "高", value: "High" },
          { color: "#039BE5", label: "中", value: "Medium" },
          { color: "#33B679", label: "低", value: "Low" }
        ]
      },
      { label: "メモ" }
    ]
  };

  rowsLocales = {
    en: [
      ["Book venue", "2025-09-01", "Not Started", "High", "Need capacity for 200"],
      ["Confirm caterer", "2025-09-05", "In Progress", "Medium", "Menu draft received"],
      ["Send invites", "2025-09-10", "Not Started", "High", "Include VIP list"],
      ["Arrange AV", "2025-09-08", "Not Started", "Medium", "Stage and microphones"],
      ["Finalize agenda", "2025-09-12", "Not Started", "High", "Keynote confirmed"],
      ["Decorations", "2025-09-15", "Not Started", "Low", "Theme: Modern Chic"],
      ["Confirm speakers", "2025-09-07", "In Progress", "High", "Awaiting bios"],
      ["Logistics", "2025-09-14", "Not Started", "Medium", "Transport and parking"],
      ["Rehearsal", "2025-09-16", "Not Started", "Medium", "Full run-through"],
      ["Event day", "2025-09-20", "Not Started", "High", "All hands on deck"],
      ["Post-event survey", "2025-09-25", "Not Started", "Low", "Feedback forms"],
      ["Thank you notes", "2025-09-30", "Not Started", "Low", "Personalized messages"],
      ["Budget review", "2025-10-05", "Not Started", "Medium", "Final expenses"],
      ["Team debrief", "2025-10-07", "Not Started", "Medium", "Lessons learned"],
      ["Photo album", "2025-10-10", "Not Started", "Low", "Event highlights"],
      ["Press release", "2025-10-12", "Not Started", "Low", "Media coverage"],
      ["Social media recap", "2025-10-15", "Not Started", "Low", "Event photos"],
      ["Follow-up meetings", "2025-10-20", "Not Started", "Medium", "Key stakeholders"],
      ["Update website", "2025-10-25", "Not Started", "Low", "Event summary"],
      ["Plan next event", "2025-11-01", "Not Started", "High", "Initial brainstorming"]
    ],
    fr: [
      ["Réserver le lieu", "2025-09-01", "Non commencé", "Élevée", "Capacité nécessaire pour 200 personnes"],
      ["Confirmer le traiteur", "2025-09-05", "En cours", "Moyenne", "Brouillon du menu reçu"],
      ["Envoyer les invitations", "2025-09-10", "Non commencé", "Élevée", "Inclure la liste VIP"],
      ["Installer l'AV", "2025-09-08", "Non commencé", "Moyenne", "Scène et microphones"],
      ["Finaliser l'agenda", "2025-09-12", "Non commencé", "Élevée", "Keynote confirmée"],
      ["Décorations", "2025-09-15", "Non commencé", "Faible", "Thème : Modern Chic"],
      ["Confirmer les intervenants", "2025-09-07", "En cours", "Élevée", "Bios en attente"],
      ["Logistique", "2025-09-14", "Non commencé", "Moyenne", "Transport et parking"],
      ["Répétition", "2025-09-16", "Non commencé", "Moyenne", "Simulation complète"],
      ["Jour de l'événement", "2025-09-20", "Non commencé", "Élevée", "Tout le monde mobilisé"],
      ["Sondage post-événement", "2025-09-25", "Non commencé", "Faible", "Formulaires de retour"],
      ["Remerciements", "2025-09-30", "Non commencé", "Faible", "Messages personnalisés"],
      ["Revue du budget", "2025-10-05", "Non commencé", "Moyenne", "Dépenses finales"],
      ["Débriefing de l'équipe", "2025-10-07", "Non commencé", "Moyenne", "Leçons apprises"],
      ["Album photo", "2025-10-10", "Non commencé", "Faible", "Points forts de l'événement"],
      ["Communiqué de presse", "2025-10-12", "Non commencé", "Faible", "Couverture médiatique"],
      ["Récapitulatif réseaux sociaux", "2025-10-15", "Non commencé", "Faible", "Photos de l'événement"],
      ["Réunions de suivi", "2025-10-20", "Non commencé", "Moyenne", "Parties prenantes clés"],
      ["Mise à jour du site web", "2025-10-25", "Non commencé", "Faible", "Résumé de l'événement"],
      ["Planifier le prochain événement", "2025-11-01", "Non commencé", "Élevée", "Brainstorming initial"]
    ],
    de: [
      ["Veranstaltungsort buchen", "2025-09-01", "Nicht gestartet", "Hoch", "Kapazität für 200 Personen benötigt"],
      ["Caterer bestätigen", "2025-09-05", "In Bearbeitung", "Mittel", "Menüentwurf erhalten"],
      ["Einladungen senden", "2025-09-10", "Nicht gestartet", "Hoch", "VIP-Liste einbeziehen"],
      ["AV arrangieren", "2025-09-08", "Nicht gestartet", "Mittel", "Bühne und Mikrofone"],
      ["Agenda finalisieren", "2025-09-12", "Nicht gestartet", "Hoch", "Keynote bestätigt"],
      ["Dekorationen", "2025-09-15", "Nicht gestartet", "Niedrig", "Thema: Modern Chic"],
      ["Redner bestätigen", "2025-09-07", "In Bearbeitung", "Hoch", "Biografien ausstehend"],
      ["Logistik", "2025-09-14", "Nicht gestartet", "Mittel", "Transport und Parken"],
      ["Probe", "2025-09-16", "Nicht gestartet", "Mittel", "Vollständiger Durchlauf"],
      ["Veranstaltungstag", "2025-09-20", "Nicht gestartet", "Hoch", "Alle Hände an Deck"],
      ["Nachbefragung", "2025-09-25", "Nicht gestartet", "Niedrig", "Feedback-Formulare"],
      ["Dankesschreiben", "2025-09-30", "Nicht gestartet", "Niedrig", "Personalisierte Nachrichten"],
      ["Budgetprüfung", "2025-10-05", "Nicht gestartet", "Mittel", "Endausgaben"],
      ["Team-Debriefing", "2025-10-07", "Nicht gestartet", "Mittel", "Erfahrungen"],
      ["Fotoalbum", "2025-10-10", "Nicht gestartet", "Niedrig", "Highlights der Veranstaltung"],
      ["Pressemitteilung", "2025-10-12", "Nicht gestartet", "Niedrig", "Medienberichterstattung"],
      ["Social-Media-Zusammenfassung", "2025-10-15", "Nicht gestartet", "Niedrig", "Event-Fotos"],
      ["Folgetreffen", "2025-10-20", "Nicht gestartet", "Mittel", "Wichtige Stakeholder"],
      ["Website aktualisieren", "2025-10-25", "Nicht gestartet", "Niedrig", "Event-Zusammenfassung"],
      ["Nächstes Event planen", "2025-11-01", "Nicht gestartet", "Hoch", "Erste Brainstorming-Ideen"]
    ],
    es: [
      ["Reservar lugar", "2025-09-01", "No iniciado", "Alta", "Capacidad necesaria para 200 personas"],
      ["Confirmar catering", "2025-09-05", "En progreso", "Media", "Borrador del menú recibido"],
      ["Enviar invitaciones", "2025-09-10", "No iniciado", "Alta", "Incluir lista VIP"],
      ["Organizar AV", "2025-09-08", "No iniciado", "Media", "Escenario y micrófonos"],
      ["Finalizar agenda", "2025-09-12", "No iniciado", "Alta", "Keynote confirmada"],
      ["Decoraciones", "2025-09-15", "No iniciado", "Baja", "Tema: Modern Chic"],
      ["Confirmar ponentes", "2025-09-07", "En progreso", "Alta", "Biografías pendientes"],
      ["Logística", "2025-09-14", "No iniciado", "Media", "Transporte y estacionamiento"],
      ["Ensayo", "2025-09-16", "No iniciado", "Media", "Revisión completa"],
      ["Día del evento", "2025-09-20", "No iniciado", "Alta", "Todos disponibles"],
      ["Encuesta post-evento", "2025-09-25", "No iniciado", "Baja", "Formularios de retroalimentación"],
      ["Notas de agradecimiento", "2025-09-30", "No iniciado", "Baja", "Mensajes personalizados"],
      ["Revisión de presupuesto", "2025-10-05", "No iniciado", "Media", "Gastos finales"],
      ["Debriefing del equipo", "2025-10-07", "No iniciado", "Media", "Lecciones aprendidas"],
      ["Álbum de fotos", "2025-10-10", "No iniciado", "Baja", "Momentos destacados del evento"],
      ["Comunicado de prensa", "2025-10-12", "No iniciado", "Baja", "Cobertura mediática"],
      ["Resumen redes sociales", "2025-10-15", "No iniciado", "Baja", "Fotos del evento"],
      ["Reuniones de seguimiento", "2025-10-20", "No iniciado", "Media", "Stakeholders clave"],
      ["Actualizar sitio web", "2025-10-25", "No iniciado", "Baja", "Resumen del evento"],
      ["Planificar próximo evento", "2025-11-01", "No iniciado", "Alta", "Lluvia de ideas inicial"]
    ],
    it: [
      ["Prenotare location", "2025-09-01", "Non iniziato", "Alta", "Capacità necessaria per 200 persone"],
      ["Confermare catering", "2025-09-05", "In corso", "Media", "Bozza del menu ricevuta"],
      ["Inviare inviti", "2025-09-10", "Non iniziato", "Alta", "Includere lista VIP"],
      ["Allestire AV", "2025-09-08", "Non iniziato", "Media", "Palco e microfoni"],
      ["Finalizzare agenda", "2025-09-12", "Non iniziato", "Alta", "Keynote confermata"],
      ["Decorazioni", "2025-09-15", "Non iniziato", "Bassa", "Tema: Modern Chic"],
      ["Confermare relatori", "2025-09-07", "In corso", "Alta", "Biografie in attesa"],
      ["Logistica", "2025-09-14", "Non iniziato", "Media", "Trasporto e parcheggio"],
      ["Prove", "2025-09-16", "Non iniziato", "Media", "Prova completa"],
      ["Giorno dell'evento", "2025-09-20", "Non iniziato", "Alta", "Tutti coinvolti"],
      ["Sondaggio post-evento", "2025-09-25", "Non iniziato", "Bassa", "Moduli di feedback"],
      ["Note di ringraziamento", "2025-09-30", "Non iniziato", "Bassa", "Messaggi personalizzati"],
      ["Revisione budget", "2025-10-05", "Non iniziato", "Media", "Spese finali"],
      ["Debriefing team", "2025-10-07", "Non iniziato", "Media", "Lezioni apprese"],
      ["Album foto", "2025-10-10", "Non iniziato", "Bassa", "Momenti salienti dell'evento"],
      ["Comunicato stampa", "2025-10-12", "Non iniziato", "Bassa", "Copertura mediatica"],
      ["Riepilogo social", "2025-10-15", "Non iniziato", "Bassa", "Foto dell'evento"],
      ["Incontri di follow-up", "2025-10-20", "Non iniziato", "Media", "Stakeholder chiave"],
      ["Aggiornamento sito web", "2025-10-25", "Non iniziato", "Bassa", "Riepilogo evento"],
      ["Pianificare prossimo evento", "2025-11-01", "Non iniziato", "Alta", "Brainstorming iniziale"]
    ],
    nl: [
      ["Locatie boeken", "2025-09-01", "Niet gestart", "Hoog", "Capaciteit nodig voor 200 personen"],
      ["Cateraar bevestigen", "2025-09-05", "Bezig", "Middel", "Menu concept ontvangen"],
      ["Uitnodigingen verzenden", "2025-09-10", "Niet gestart", "Hoog", "VIP-lijst opnemen"],
      ["AV regelen", "2025-09-08", "Niet gestart", "Middel", "Podium en microfoons"],
      ["Agenda afronden", "2025-09-12", "Niet gestart", "Hoog", "Keynote bevestigd"],
      ["Decoraties", "2025-09-15", "Niet gestart", "Laag", "Thema: Modern Chic"],
      ["Sprekers bevestigen", "2025-09-07", "Bezig", "Hoog", "Biografieën in afwachting"],
      ["Logistiek", "2025-09-14", "Niet gestart", "Middel", "Transport en parkeren"],
      ["Repetitie", "2025-09-16", "Niet gestart", "Middel", "Volledige doorloop"],
      ["Evenementdag", "2025-09-20", "Niet gestart", "Hoog", "Alle handen aan dek"],
      ["Post-event enquête", "2025-09-25", "Niet gestart", "Laag", "Feedbackformulieren"],
      ["Bedankjes", "2025-09-30", "Niet gestart", "Laag", "Persoonlijke berichten"],
      ["Budget review", "2025-10-05", "Niet gestart", "Middel", "Einduitgaven"],
      ["Team debrief", "2025-10-07", "Niet gestart", "Middel", "Geleerde lessen"],
      ["Fotoalbum", "2025-10-10", "Niet gestart", "Laag", "Evenement hoogtepunten"],
      ["Persbericht", "2025-10-12", "Niet gestart", "Laag", "Mediaverslaggeving"],
      ["Social media overzicht", "2025-10-15", "Niet gestart", "Laag", "Evenement foto's"],
      ["Follow-up vergaderingen", "2025-10-20", "Niet gestart", "Middel", "Belangrijke stakeholders"],
      ["Website bijwerken", "2025-10-25", "Niet gestart", "Laag", "Evenement samenvatting"],
      ["Volgend evenement plannen", "2025-11-01", "Niet gestart", "Hoog", "Eerste brainstorm"]
    ],
    pt: [
      ["Reservar local", "2025-09-01", "Não iniciado", "Alta", "Capacidade necessária para 200 pessoas"],
      ["Confirmar catering", "2025-09-05", "Em andamento", "Média", "Rascunho do menu recebido"],
      ["Enviar convites", "2025-09-10", "Não iniciado", "Alta", "Incluir lista VIP"],
      ["Preparar AV", "2025-09-08", "Não iniciado", "Média", "Palco e microfones"],
      ["Finalizar agenda", "2025-09-12", "Não iniciado", "Alta", "Keynote confirmada"],
      ["Decorações", "2025-09-15", "Não iniciado", "Baixa", "Tema: Modern Chic"],
      ["Confirmar palestrantes", "2025-09-07", "Em andamento", "Alta", "Bios aguardando"],
      ["Logística", "2025-09-14", "Não iniciado", "Média", "Transporte e estacionamento"],
      ["Ensaio", "2025-09-16", "Não iniciado", "Média", "Revisão completa"],
      ["Dia do evento", "2025-09-20", "Não iniciado", "Alta", "Todos à disposição"],
      ["Pesquisa pós-evento", "2025-09-25", "Não iniciado", "Baixa", "Formulários de feedback"],
      ["Notas de agradecimento", "2025-09-30", "Não iniciado", "Baixa", "Mensagens personalizadas"],
      ["Revisão do orçamento", "2025-10-05", "Não iniciado", "Média", "Despesas finais"],
      ["Debriefing da equipe", "2025-10-07", "Não iniciado", "Média", "Lições aprendidas"],
      ["Álbum de fotos", "2025-10-10", "Não iniciado", "Baixa", "Destaques do evento"],
      ["Comunicado de imprensa", "2025-10-12", "Não iniciado", "Baixa", "Cobertura da mídia"],
      ["Resumo das redes sociais", "2025-10-15", "Não iniciado", "Baixa", "Fotos do evento"],
      ["Reuniões de follow-up", "2025-10-20", "Não iniciado", "Média", "Stakeholders chave"],
      ["Atualizar site", "2025-10-25", "Não iniciado", "Baixa", "Resumo do evento"],
      ["Planejar próximo evento", "2025-11-01", "Não iniciado", "Alta", "Brainstorming inicial"]
    ],
    ru: [
      ["Забронировать место", "2025-09-01", "Не начато", "Высокий", "Необходима вместимость на 200 человек"],
      ["Подтвердить кейтеринг", "2025-09-05", "В процессе", "Средний", "Черновик меню получен"],
      ["Разослать приглашения", "2025-09-10", "Не начато", "Высокий", "Включить VIP список"],
      ["Подготовить AV", "2025-09-08", "Не начато", "Средний", "Сцена и микрофоны"],
      ["Утвердить повестку", "2025-09-12", "Не начато", "Высокий", "Основная речь подтверждена"],
      ["Декорации", "2025-09-15", "Не начато", "Низкий", "Тема: Modern Chic"],
      ["Подтвердить спикеров", "2025-09-07", "В процессе", "Высокий", "Биографии ожидаются"],
      ["Логистика", "2025-09-14", "Не начато", "Средний", "Транспорт и парковка"],
      ["Репетиция", "2025-09-16", "Не начато", "Средний", "Полная репетиция"],
      ["День мероприятия", "2025-09-20", "Не начато", "Высокий", "Все задействованы"],
      ["Опрос после мероприятия", "2025-09-25", "Не начато", "Низкий", "Формы обратной связи"],
      ["Благодарственные письма", "2025-09-30", "Не начато", "Низкий", "Персонализированные сообщения"],
      ["Проверка бюджета", "2025-10-05", "Не начато", "Средний", "Итоговые расходы"],
      ["Дебрифинг команды", "2025-10-07", "Не начато", "Средний", "Извлеченные уроки"],
      ["Фотоальбом", "2025-10-10", "Не начато", "Низкий", "Основные моменты мероприятия"],
      ["Пресс-релиз", "2025-10-12", "Не начато", "Низкий", "Освещение в СМИ"],
      ["Итоги соцсетей", "2025-10-15", "Не начато", "Низкий", "Фото мероприятия"],
      ["Последующие встречи", "2025-10-20", "Не начато", "Средний", "Ключевые участники"],
      ["Обновить сайт", "2025-10-25", "Не начато", "Низкий", "Итоги мероприятия"],
      ["Планирование следующего мероприятия", "2025-11-01", "Не начато", "Высокий", "Начальное мозговое штурмирование"]
    ],
    zh: [
      ["预订场地", "2025-09-01", "未开始", "高", "需要200人容量"],
      ["确认餐饮", "2025-09-05", "进行中", "中", "收到菜单草稿"],
      ["发送邀请", "2025-09-10", "未开始", "高", "包含VIP名单"],
      ["安排视听设备", "2025-09-08", "未开始", "中", "舞台和麦克风"],
      ["最终确定议程", "2025-09-12", "未开始", "高", "主题演讲已确认"],
      ["装饰", "2025-09-15", "未开始", "低", "主题: 现代时尚"],
      ["确认演讲者", "2025-09-07", "进行中", "高", "等待简历"],
      ["物流", "2025-09-14", "未开始", "中", "交通和停车"],
      ["排练", "2025-09-16", "未开始", "中", "完整排练"],
      ["活动当天", "2025-09-20", "未开始", "高", "全员到场"],
      ["活动后调查", "2025-09-25", "未开始", "低", "反馈表"],
      ["感谢信", "2025-09-30", "未开始", "低", "个性化信息"],
      ["预算审查", "2025-10-05", "未开始", "中", "最终费用"],
      ["团队总结", "2025-10-07", "未开始", "中", "经验教训"],
      ["相册", "2025-10-10", "未开始", "低", "活动亮点"],
      ["新闻稿", "2025-10-12", "未开始", "低", "媒体报道"],
      ["社交媒体回顾", "2025-10-15", "未开始", "低", "活动照片"],
      ["后续会议", "2025-10-20", "未开始", "中", "关键利益相关者"],
      ["更新网站", "2025-10-25", "未开始", "低", "活动总结"],
      ["计划下一个活动", "2025-11-01", "未开始", "高", "初步头脑风暴"]
    ],
    ja: [
      ["会場予約", "2025-09-01", "未着手", "高", "200人収容可能"],
      ["ケータリング確認", "2025-09-05", "進行中", "中", "メニュー案受領"],
      ["招待状送付", "2025-09-10", "未着手", "高", "VIPリストを含む"],
      ["AV手配", "2025-09-08", "未着手", "中", "ステージとマイク"],
      ["議題確定", "2025-09-12", "未着手", "高", "基調講演確認済み"],
      ["装飾", "2025-09-15", "未着手", "低", "テーマ: モダンシック"],
      ["スピーカー確認", "2025-09-07", "進行中", "高", "経歴待ち"],
      ["物流", "2025-09-14", "未着手", "中", "交通と駐車"],
      ["リハーサル", "2025-09-16", "未着手", "中", "通しリハーサル"],
      ["イベント当日", "2025-09-20", "未着手", "高", "全員集合"],
      ["イベント後アンケート", "2025-09-25", "未着手", "低", "フィードバックフォーム"],
      ["サンキューノート", "2025-09-30", "未着手", "低", "個別メッセージ"],
      ["予算レビュー", "2025-10-05", "未着手", "中", "最終費用"],
      ["チーム振り返り", "2025-10-07", "未着手", "中", "学び"],
      ["フォトアルバム", "2025-10-10", "未着手", "低", "イベントハイライト"],
      ["プレスリリース", "2025-10-12", "未着手", "低", "メディア報道"],
      ["SNSまとめ", "2025-10-15", "未着手", "低", "イベント写真"],
      ["フォローアップ会議", "2025-10-20", "未着手", "中", "主要関係者"],
      ["ウェブサイト更新", "2025-10-25", "未着手", "低", "イベント概要"],
      ["次回イベント計画", "2025-11-01", "未着手", "高", "初期ブレインストーミング"]
    ]
  };

  localizationDataSource = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Italian', value: 'it' },
    { label: 'Dutch', value: 'nl' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Japanese', value: 'ja' }
  ];

  gridSettings = {
    columns: JSON.parse(JSON.stringify(this.columnsLocales['en'])),
    dataSource: JSON.parse(JSON.stringify(this.rowsLocales['en'])),
    filtering: {
      enabled: true,
    },
    editing: {
      enabled: true
    },
    appearance: {
      allowHover: true
    },
    sorting: {
      enabled: true
    },
    selection: {
      enabled: true,
      allowCellSelection: true,
      allowRowHeaderSelection: true,
      allowColumnHeaderSelection: true,
      mode: 'extended'
    }
  };

  async changeLocalization(event: CustomEvent) {
      const locale = event.detail.value;
	  try {
		if (locale !== 'en') {
		  // Dynamically fetch locale JSON for grid localization
		  const response = await fetch(`../../../source/locales/${locale}/grid.json`);
		  if (!response.ok) throw new Error(`HTTP error ${response.status}`);
		  const localeData = await response.json();
		  this.grid.setLocale(locale, localeData);
		} else {
		  this.grid.setLocale(locale);
		}

		// Deep clone columns and rows for the selected locale
		const columns = JSON.parse(JSON.stringify(this.columnsLocales))[locale];
		const dataSource = JSON.parse(JSON.stringify(this.rowsLocales))[locale];
		const gridColumns = this.grid.columns as GridColumn[];
		
		// Update grid columns labels and options
		for (let i = 0; i < gridColumns.length; i++) {
			
			gridColumns[i].label = columns[i].label;

		  if (gridColumns[i].options) {
			gridColumns[i].options = columns[i].options;
		  }
		}

		// Update grid data source
		this.grid.dataSource = dataSource;
	  } catch (err) {
		console.error(`Failed to load locale '${locale}':`, err);
	  }
};

  ngAfterViewInit(): void {
    // Set initial selected index for localization dropdown
   
  
  }

}