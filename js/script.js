const { createApp } = Vue

const app = createApp({
    data(){
        return {
            currentChat: 0,
            newMessage: '',
            searchTerm: '',
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    active: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    active: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    active: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    active: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    active: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    active: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ]
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    active: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    active: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        getChat(id){
            this.currentChat = this.contacts.findIndex((item) => {
                return item.id == id
            })
        },

        truncMsg(prt) {
            if(prt.length > 30){
                return prt.slice(0,30) + ' ...';
            } else {
                return prt;
            }
        },

        getLastMessage(item){
            const msg = item.messages.filter((message)=>{
                return message.status === 'received';
            })
            return msg[msg.length-1]
        },

        sendMessage(){
            if(!this.newMessage) return;
            const d = new Date();
            let newDate = d.toDateString();
            const newSentMessage = {
                date: newDate,
                message: this.newMessage,
                status: 'sent'
            }
            this.contacts[this.currentChat].messages.push(newSentMessage);
            this.newMessage = '';
           
            setTimeout(()=>{
                const d = new Date();
            let newDate = d.toDateString();
            const newSentMessage = {
                date: newDate,
                message: 'Certo! 😃',
                status: 'received'
            }
            this.contacts[this.currentChat].messages.push(newSentMessage);
            }, 1000)
        }
    },

    // proprietà calcolata che si utilizza come un metodo ma è una proprietà. Non posso passargli parametri, deve sempre avere un valore di ritorno e si deve basare su una proprietà dell'oggetto stesso. La filteredContacts va a sostituire il semplice contacts nel for in html perchè si applica il filtro sulla proprietà calcolata di questo metodo che si basa sull'array di contacts che cambia.
    computed: {
        filteredContacts(){
            return this.contacts.filter((item)=>{
                const name = item.name.toLowerCase();
                return name.includes(this.searchTerm.toLowerCase());
            })
        }
    },
    mounted(){

    },
});

app.mount('#app');

