// import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";
import { persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// const store = createStore(contactsReducer, composeWithDevTools(applyMiddleware()));
const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
  }
const persistedReducer = persistReducer(persistConfig, contactsReducer );

const middleware = [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }
}), 
        logger];

const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
},
)
const persistor = persistStore(store);

export default { store, persistor };