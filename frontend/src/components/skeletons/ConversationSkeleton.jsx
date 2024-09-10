const ConversationSkeleton = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-slate-600"></div>
      <div className="flex flex-col gap-1 w-full">
        <div className="skeleton h-4 w-2/5 bg-slate-600"></div>
        <div className="skeleton h-4 bg-slate-600"></div>
      </div>
    </div>
  );
};

export default ConversationSkeleton;
