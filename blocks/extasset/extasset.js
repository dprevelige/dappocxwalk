export default function decorate(block) {
    const [quoteWrapper] = block.children;
  
    const blockquote = document.createElement('notneeded');
    blockquote.textContent = quoteWrapper.textContent.trim();
    quoteWrapper.replaceChildren(blockquote);
  }