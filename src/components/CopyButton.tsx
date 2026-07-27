import React, { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  value: string;
  className?: string;
}

const CopyButton = ({ value, className }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

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
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={cn(
        "h-7 w-7 p-0 flex items-center justify-center shrink-0 rounded-md border border-[#252530] bg-[#16161c] hover:bg-[#20202a] text-slate-400 hover:text-white transition-colors", 
        className
      )}
      onClick={copyToClipboard}
      title="Copy to clipboard"
    >
      {isCopied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </Button>
  );
};

export default CopyButton;
