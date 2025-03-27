
import React, { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  value: string;  // Changed from 'text' to 'value' to match usage
  className?: string;
}

const CopyButton = ({ value, className }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);  // Changed from 'text' to 'value'
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "h-8 w-8 p-0 absolute top-3 right-3 text-foreground/60 hover:text-foreground bg-background/80 backdrop-blur-sm", 
        className
      )}
      onClick={copyToClipboard}
      title="Copy to clipboard"
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
};

export default CopyButton;
