let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    //Deconstruct req.body for the text and time variable
    let { text, time } = req.body;
    //Now, you want to push a new object into the array 'messages'
    //This new object needs to contain the global 'id' variable
    //as well as 'text' and 'time' (which is really req.body.text...ect)
    messages.push({ id, text, time });
    //Now, increment the id variable by one so that
    //id number will not be used by any other message
    id++;
    //At the end of the method, you need to respond with the messages.
    res.status(200).send(messages);
  },
  read: (req, res) => {
    //this returns the messages array;
    res.status(200).send(messages);
  },
  update: (req, res) => {
    //Deconstruct req.body for the text variable
    let { text } = req.body;
    //Assigning a variable to 'req.params.id' to
    //find the id of the parameter
    let updateID = req.params.id;
    //Finds where the index's match
    let messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    //return
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    let deleteID = req.params.id;
    messageIndex = messages.findIndex(messages => message.id === deleteID);
    messages.splice(messageIndex, 1);

    res.status(200).send(messages);
  }
};
