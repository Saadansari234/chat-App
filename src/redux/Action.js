export const Actions={
SENDCHAT1:"SENDCHAT1",
SENDCHAT2:"SENDCHAT2"
}

const {SENDCHAT1, SENDCHAT2} = Actions

export const addMessage1 = (data) => ({
    type: SENDCHAT1,
    payload: data,
  });

  
export const addMessage2 = (data) => ({
  type: SENDCHAT2,
  payload: data,
});