const getRandomValue = (): number => {
  return Math.floor(Math.random() * 10 + 1);
}

const generateProfileList = (profileId: number, type: string): Profile[] => {
  return Array.from(new Array(getRandomValue()), (_, index) => index).map<Profile>(() => {
    const userId = getRandomValue();

    return {
      id: userId,
      email: `user-${userId}@gmail.com`,
      getId: function () {
        return this.id;
      },
      getEmail: function () {
        return this.email;
      },
      profileId,
      type,
    };
  });
};

interface Profile {
  id: number;
  email: string;
  type: string;
  getId(): number;
  getEmail(): string;
}

interface ProfileIterator {
  getNext(): Profile | undefined;
  hasMore(): boolean;
}

interface SocialNetwork {
  createFriendsIterator(profileId: number): ProfileIterator;
  createCoworkersIterator(profileId: number): ProfileIterator;
}

class FacebookIterator implements ProfileIterator {
  currentPosition = 0;
  cache: Profile[] = [];
  
  constructor(
    private facebook: Facebook,
    private profileId: number,
    private type: string,
  ) {}

  lazyInit(): void {
    if (!this.cache.length) {
      this.cache = this.facebook.fillCache(this.profileId, this.type);
    }
  }

  getNext(): Profile | undefined {
    if (this.hasMore()) {
      const result = this.cache[this.currentPosition];
      this.currentPosition++;

      return result;
    }
  }

  hasMore(): boolean {
    this.lazyInit();

    return this.currentPosition < this.cache.length;
  }
}

class LinkedinIterator implements ProfileIterator {
  currentIndex = 0;
  cache: Map<number, Map<string, Set<Profile>>> = new Map();
  
  constructor(
    private linkedin: Linkedin,
    private profileId: number,
    private type: string,
  ) {}

  lazyInit(): void {
    if (!this.cache.size) {
      this.cache = this.linkedin.fillCache(this.profileId, this.type);
    }
  }

  getNext(): Profile | undefined {
    const profileList = this.cache.get(this.profileId)?.get(this.type);

    if (this.hasMore()) {
      const result = [...profileList ?? []][this.currentIndex];
      this.currentIndex++;

      return result;
    }
  }

  hasMore(): boolean {
    this.lazyInit();

    return this.currentIndex < (this.cache.get(this.profileId)?.get(this.type)?.size ?? 0);
  }
}

class Facebook implements SocialNetwork {
  createFriendsIterator(profileId: number): ProfileIterator {
    return new FacebookIterator(this, profileId, 'friends');
  }

  createCoworkersIterator(profileId: number): ProfileIterator {
    return new FacebookIterator(this, profileId, 'coworkers');
  }

  fillCache(profileId: number, type: string): Profile[] {
    return generateProfileList(profileId, type);
  }
}

class Linkedin implements SocialNetwork {
  createFriendsIterator(profileId: number): ProfileIterator {
    return new LinkedinIterator(this, profileId, 'friends');
  }

  createCoworkersIterator(profileId: number): ProfileIterator {
    return new LinkedinIterator(this, profileId, 'coworkers');
  }

  fillCache(profileId: number, type: string): Map<number, Map<string, Set<Profile>>> {
    const workerMap = new Map<string, Set<Profile>>();
    const profileList = generateProfileList(profileId, type);

    workerMap.set(type, new Set(profileList));

    return new Map<number, typeof workerMap>().set(profileId, workerMap);
  }
}

class SocialSpammer {
  private profile?: Profile;

  send(iterator: ProfileIterator, message: string) {
    while(iterator.hasMore()) {
      this.profile = iterator.getNext();

      console.log(`Send to email: ${this.profile?.getEmail()} \n\n user-type: ${this.profile?.type} with message: ${message} \n\n`);
    }
  }
}

export class NetworkApp {
  private iterator?: ProfileIterator;
  private network?: SocialNetwork;
  private spammer?: SocialSpammer;

  constructor(
    private socialNetworkType: 'Facebook' | 'Linkedin',
  ) {
    this.spammer = new SocialSpammer();

    if (this.socialNetworkType === 'Facebook') {
      this.network = new Facebook();
    } else {
      this.network = new Linkedin();
    }
  }
  
  sendSpamToFriends(id: number) {
    this.iterator = this.network!.createFriendsIterator(id);
    this.spammer!.send(this.iterator, 'Very important message');
  }

  sendSpamToCoworkers(id: number) {
    this.iterator = this.network!.createCoworkersIterator(id);
    this.spammer!.send(this.iterator, 'Very important message');
  }
}
