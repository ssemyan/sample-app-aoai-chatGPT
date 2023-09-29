import { Action, AppState } from './AppProvider';

// Define the reducer function
export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'UPDATE_CURRENT_CHAT':
            return { ...state, currentChat: action.payload };
        case 'UPDATE_CHAT_HISTORY':
            if(!state.chatHistory || !state.currentChat){
                return state;
            }
            let conversationIndex = state.chatHistory.findIndex(conv => conv.id === action.payload.id);
            if (conversationIndex !== -1) {
                let updatedChatHistory = [...state.chatHistory];
                updatedChatHistory[conversationIndex] = state.currentChat
                return {...state, chatHistory: updatedChatHistory}
            } else {
                return { ...state, chatHistory: [...state.chatHistory, action.payload] };
            }
        case 'DELETE_CURRENT_CHAT_MESSAGES':
            //TODO: make api call to delete current conversation messages from DB
            if(!state.currentChat || !state.chatHistory){
                return state;
            }
            const updatedCurrentChat = {
                ...state.currentChat,
                messages: []
            };
            return {
                ...state,
                currentChat: updatedCurrentChat
            };
        default:
            return state;
      }
};