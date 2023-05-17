import Image from 'next/image';

export default function UserAvatar() {
  return (
    <Image
      className="h-8 w-8 rounded-full bg-gray-50"
      width={32}
      height={32}
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="John Doe"
    />
  );
}
