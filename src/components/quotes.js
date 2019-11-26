import React, {Component} from 'react';


const arrayOfQuotes = [
  {
    quote: 'The best thing about the future is that it comes one day at a time.',
    author: 'Abraham Lincoln'
  },
  {
    quote: 'War is God’s way of teaching Americans geography.',
    author: 'Ambrose Bierce'
  },
  {
    quote: 'I’ve always wanted to go to Switzerland to see what the army does with those wee red knives.',
    author: 'Billy Connolly'
  },
  {
    quote: 'I refuse to answer that question on the grounds that I don’t know the answer.',
    author: 'Douglas Adams'
  },
  {
    quote: 'Analyzing humor is like dissecting a frog. Few people are interested and the frog dies of it.',
    author: 'E. B. White'
  },
  {
    quote: 'I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.',
    author: 'Emo Philips'
  },
  {
    quote: 'Good advice is something a man gives when he is too old to set a bad example.',
    author: 'Francois de La Rochefoucauld'
  },
  {
    quote: 'Patriotism is your conviction that this country is superior to all others because you were born in it.',
    author: 'George Bernard Shaw'
  },
  {
    quote: '“Most people work just hard enough not to get fired and get paid just enough money not to quit.”',
    author: 'George Carlin'
  },
  {
    quote: 'It’s only when you look at an ant through a magnifying glass on a sunny day that you realize how often they burst into flames.',
    author: 'Harry Hill'
  },
  {
    quote: 'It’s amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.',
    author: 'Jerry Seinfeld'
  },
  {
    quote: 'True terror is to wake up one morning and discover that your high school class is running the country.',
    author: 'Kurt Vonnegut'
  },
  {
    quote: 'Originality is the fine art of remembering what you hear but forgetting where you heard it.',
    author: 'Laurence J. Peter'
  },
  {
    quote: 'Age is an issue of mind over matter. If you don’t mind, it doesn’t matter.',
    author: 'Mark Twain'
  },
  {
    quote: 'Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.',
    author: 'Miles Kington'
  },
  {
    quote: 'The only thing that stops God from sending another flood is that the first one was useless.',
    author: 'Nicolas Chamfort'
  },
  {
    quote: 'There’s a fine line between genius and insanity. I have erased this line.',
    author: 'Oscar Levant'
  },
  {
    quote: 'I want my children to have all the things I couldn’t afford. Then I want to move in with them.',
    author: 'Phyllis Diller'
  },
  {
    quote: 'The man who smiles when things go wrong has thought of someone to blame it on.',
    author: 'Robert Bloch'
  },
  {
    quote: 'By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.',
    author: 'Robert Frost'
  },
  {
    quote: 'I don’t want any yes-men around me. I want everybody to tell me the truth even if it costs them their job.',
    author: 'Samuel Goldwyn'
  },
  {
    quote: 'If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?',
    author: 'Scott Adams'
  },
  {
    quote: 'The trouble with telling a good story is that it invariably reminds the other fellow of a dull one.',
    author: 'Sid Caesar'
  },
  {
    quote: 'The early bird gets the worm, but the second mouse gets the cheese.',
    author: 'Steven Wright'
  },
  {
    quote: 'When I die, I want to die like my grandfather who died peacefully in his sleep. Not screaming like all the passengers in his car.',
    author: 'Will Rogers'
  },
  {
    quote: 'Common sense and a sense of humor are the same thing, moving at different speeds. A sense of humor is just common sense, dancing.',
    author: 'William James'
  },
  {
    quote: 'I don’t want to achieve immortality through my work. I want to achieve it through not dying.',
    author: 'Woody Allen'
  },
 

];

console.log(arrayOfQuotes.length);

function Quotes(props) {

const passNumber = props.passNumber; 

  return (
    <div>
      <p id="text" class="px-2" style={{fontFamily: 'Verdana, Geneva, sans-serif', height: '50px'}} >{arrayOfQuotes[passNumber].quote}</p>
      <p id="author">- {arrayOfQuotes[passNumber].author}</p>
    </div>
  );
};

export default Quotes;